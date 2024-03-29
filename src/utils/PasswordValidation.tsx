import dynamic from "next/dynamic";

const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false,
});

interface Props {
  type?: "password" | "confirmPassword";
  value: string;
  handleValidation: (isValid: boolean) => void;
  valueAgain?: string;
}

const PasswordValidation: React.FC<Props> = ({
  type = "password",
  value,
  handleValidation,
  valueAgain,
}) => {
  if (type === "confirmPassword") {
    return (
      <PasswordChecklist
        rules={["match"]}
        value={value}
        valueAgain={valueAgain}
        messages={{
          match: "Password and confirm password should match.",
        }}
        onChange={handleValidation}
      />
    );
  } else {
    return (
      <PasswordChecklist
        rules={["minLength", "capital", "specialChar", "lowercase", "number"]}
        minLength={8}
        value={value}
        messages={{
          minLength: "The minimum length of the password should be 8.",
          specialChar:
            "Password should contain at least one special character.",
          number: "Password should contain at least one numeric letter.",
          capital: "Password should contain at least one uppercase letter.",
          lowercase: "Password should contain at least one lowercase letter.",
        }}
        onChange={handleValidation}
      />
    );
  }
};

export default PasswordValidation;
