type Role = "admin" | "user" | "anonymous";

type ExcludeAdmin = Exclude<Role, "admin">;

type NonAdminRole = Exclude<Role, "admin" | "anonymous">;
