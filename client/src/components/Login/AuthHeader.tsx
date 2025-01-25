import { typeAuthHeader } from "../../utils/types/typeAuthHeader";

export function AuthHeader({ title, subtitle }: typeAuthHeader) {
  return (
    <div className="py-2">
      <h1 className="font-semibold">{title}</h1>
      <h2 className="font-normal">{subtitle}</h2>
    </div>
  );
}
