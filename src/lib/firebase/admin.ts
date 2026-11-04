/**
 * Firebase Admin SDK — Server-Side Only
 *
 * Used for privileged operations: custom claims, admin reads/writes,
 * booking transactions, etc.
 *
 * NEVER import this file in client components or browser-executed code.
 *
 * Phase 4 will activate this module.
 */

// import { initializeApp, cert, getApps } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";
// import { getFirestore } from "firebase-admin/firestore";

// const adminApp =
//   getApps().length === 0
//     ? initializeApp({
//         credential: cert({
//           projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
//           clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//           privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
//             /\\n/g,
//             "\n"
//           ),
//         }),
//       })
//     : getApps()[0];

// export const adminAuth = getAuth(adminApp);
// export const adminDb = getFirestore(adminApp);
