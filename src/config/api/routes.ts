export const API_URL = import.meta.env.VITE_API_URL;

export const ApiRoutes = {
    auth: {
        prefix: "/auth",
        email: {
            login: "/auth/login",
            register: "/auth/register",
            forgot_password: "/auth/forgot-password",
            reset_password: "/auth/reset-password",
            verify_email: "/auth/verify-email",
            resend_verification_email: "/auth/resend-verification-email",
        },
    },
    users: {
        prefix: "/users",
        me: "/users/me",
    },
}