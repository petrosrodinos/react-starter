import { useEffect } from "react";
import { useRefreshAccountToken } from "@/features/auth/hooks/use-auth.ts";
import { useAuthStore } from "@/stores/auth.ts";

export const AuthTokenRefresher = () => {
  const { isLoggedIn, account_uuid } = useAuthStore();
  const { mutate: refreshAccountToken } = useRefreshAccountToken();

  useEffect(() => {
    if (isLoggedIn && account_uuid) {
      refreshAccountToken();
    }
  }, []);

  return null;
};
