import { FIREBASE_DATABASE_API, FIREBASE_API  } from "@env"


export const FIREBASE_REALTIME_DATABASE_URL = FIREBASE_DATABASE_API
export const FIREBASE_API_KEY = FIREBASE_API
export const FIREBASE_AUTH_SIGN_UP_URL= `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`
export const FIREBASE_AUTH_SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
