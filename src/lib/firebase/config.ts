/**
 * Firebase Client Configuration
 *
 * This file initializes Firebase for client-side usage.
 * All values come from environment variables — never commit actual keys.
 *
 * Phase 4 will wire this into the auth and Firestore layers.
 */

// import { initializeApp, getApps } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Uncomment when Firebase is configured (Phase 4):
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

export { firebaseConfig };
