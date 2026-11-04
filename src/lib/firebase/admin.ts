/**
 * Firebase Admin SDK — Server-Side Only
 *
 * NEVER import this file in client components or browser-executed code.
 * Used for: custom claims, booking transactions, admin reads/writes.
 *
 * Requires FIREBASE_ADMIN_* env vars to be set.
 * If not configured, exports will be null and callers must handle gracefully.
 */

let adminAuth: import("firebase-admin/auth").Auth | null = null;
let adminDb: import("firebase-admin/firestore").Firestore | null = null;

async function getAdminApp() {
  const { initializeApp, cert, getApps, getApp } = await import(
    "firebase-admin/app"
  );

  if (getApps().length > 0) return getApp();

  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (!projectId || !clientEmail || !privateKey) {
    console.warn(
      "[firebase-admin] Missing credentials — admin SDK not initialized. " +
        "Set FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL, and FIREBASE_ADMIN_PRIVATE_KEY."
    );
    return null;
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
  });
}

export async function getAdminAuth() {
  if (adminAuth) return adminAuth;
  const app = await getAdminApp();
  if (!app) return null;
  const { getAuth } = await import("firebase-admin/auth");
  adminAuth = getAuth(app);
  return adminAuth;
}

export async function getAdminDb() {
  if (adminDb) return adminDb;
  const app = await getAdminApp();
  if (!app) return null;
  const { getFirestore } = await import("firebase-admin/firestore");
  adminDb = getFirestore(app);
  return adminDb;
}
