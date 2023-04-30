type RoleAttributes =
  | { role: "admin"; orgId: string }
  | { role: "user" }
  | { role: "anonymous" };

type RoleAdmin = Extract<RoleAttributes, { role: "admin" }>;
