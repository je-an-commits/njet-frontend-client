import { useState } from "react";
import { Select, type SelectOption } from "../ui/Select";
import { Globe } from "lucide-react";

const roleOptions: SelectOption[] = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
];

export function TestSelect() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="p-8 max-w-sm mx-auto flex flex-col gap-4">
      <Select
        label="User Role"
        placeholder="Select a role..."
        options={roleOptions}
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        leftIcon={<Globe size={16} />}
        helperText="Choose the level of access for this account."
      />
    </div>
  );
}
