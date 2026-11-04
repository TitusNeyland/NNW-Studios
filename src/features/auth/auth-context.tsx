"use client";

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from "firebase/auth";
import { auth, isConfigured } from "@/lib/firebase/config";
import type { UserRole } from "@/types";

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  role: UserRole;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateDisplayName: (name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function parseRole(_user: User | null): UserRole {
  if (!_user) return "guest";
  // In production, role comes from custom claims set server-side:
  // const claims = (await user.getIdTokenResult()).claims;
  // return (claims.role as UserRole) ?? "client";
  return "client";
}

function mapUser(firebaseUser: User | null): AuthUser | null {
  if (!firebaseUser) return null;
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    emailVerified: firebaseUser.emailVerified,
    role: parseRole(firebaseUser),
  };
}

// External store for auth state — avoids setState-in-effect lint issues
let currentUser: AuthUser | null = null;
let authLoading = isConfigured;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((l) => l());
}

if (isConfigured && auth) {
  const authUnsubscribe = onAuthStateChanged(auth, (fbUser) => {
    currentUser = mapUser(fbUser);
    authLoading = false;
    notifyListeners();
  });

  if (typeof window !== "undefined") {
    (window as unknown as Record<string, unknown>).__nnw_auth_unsub =
      authUnsubscribe;
  }
}

function subscribeAuth(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getAuthSnapshot() {
  return { user: currentUser, loading: authLoading };
}

function getServerSnapshot() {
  return { user: null, loading: false };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, loading } = useSyncExternalStore(
    subscribeAuth,
    getAuthSnapshot,
    getServerSnapshot
  );

  const signIn = useCallback(async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase not configured");
    await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signUp = useCallback(
    async (email: string, password: string, name: string) => {
      if (!auth) throw new Error("Firebase not configured");
      const cred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(cred.user, { displayName: name });
    },
    []
  );

  const signInWithGoogle = useCallback(async () => {
    if (!auth) throw new Error("Firebase not configured");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }, []);

  const signOut = useCallback(async () => {
    if (!auth) throw new Error("Firebase not configured");
    await firebaseSignOut(auth);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    if (!auth) throw new Error("Firebase not configured");
    await sendPasswordResetEmail(auth, email);
  }, []);

  const updateDisplayName = useCallback(async (name: string) => {
    if (!auth) throw new Error("Firebase not configured");
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
      currentUser = mapUser(auth.currentUser);
      notifyListeners();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        resetPassword,
        updateDisplayName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
