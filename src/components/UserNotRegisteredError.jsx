export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-3">Access Restricted</h1>
        <p className="text-muted-foreground">
          Your account is not registered for this app. Please contact the administrator for access.
        </p>
      </div>
    </div>
  )
}
