const readToken = () => {
  if (typeof window === "undefined") return null
  return localStorage.getItem("base44_access_token") || localStorage.getItem("token")
}

const base44 = {
  auth: {
    async me() {
      const token = readToken()
      if (!token) {
        const error = new Error("Authentication required")
        error.status = 401
        throw error
      }
      return { id: "local-user", role: "admin" }
    },
    logout(redirectUrl) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("base44_access_token")
        localStorage.removeItem("token")
        if (redirectUrl) {
          window.location.href = redirectUrl
        }
      }
    },
    redirectToLogin(returnUrl) {
      if (typeof window !== "undefined") {
        window.location.href = returnUrl || window.location.href
      }
    },
  },
  entities: {
    Booking: {
      async create(payload) {
        try {
          await fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        } catch {
          // no-op fallback for local preview
        }
        return {
          id: crypto?.randomUUID?.() || String(Date.now()),
          status: "pending",
          ...payload,
        }
      },
    },
  },
}

export { base44 }
