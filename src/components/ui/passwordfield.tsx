import * as React from "react";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const toggleVisibility = () => setPasswordVisible(!passwordVisible);
    return (
      <div className="relative">
        {icon}
        <input
          type={passwordVisible ? "text" : "password"}
          className={cn(
            `flex h-10 w-full rounded-md border border-input bg-background ${
              icon && "ps-10"
            } px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 z-0`,
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          className="focus:outline-none absolute right-3  top-1/2 -translate-y-1/2"
          type="button"
          onClick={toggleVisibility}
        >
          {passwordVisible ? (
            <EyeInvisibleOutlined className="text-[#b3b3b3] text-lg " />
          ) : (
            <EyeOutlined className="text-[#b3b3b3] text-lg" />
          )}
        </button>
      </div>
    );
  }
);
PasswordField.displayName = "PasswordField";

export { PasswordField };
