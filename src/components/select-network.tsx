import { useRouter } from "next/router";
import { useRef } from "react";
import { useEndpoint } from "../utils/use-endpoint";
import { ENDPOINTS } from "../utils/endpoints";

export function SelectNetwork() {
  const router = useRouter();
  const { endpoint, setEndpoint } = useEndpoint();
  const selectRef = useRef<any>();

  return (
    <div className="form-control justify-center">
      <select
        ref={selectRef}
        id="rpc"
        className="select ml-8"
        defaultValue={endpoint}
        style={{ maxWidth: 200, minHeight: "2rem", height: "2rem" }}
        onChange={(e) => setEndpoint(e.target.value)}
      >
        {ENDPOINTS.map((ep: any) => (
          <option key={ep.name} value={ep.endpoint}>
            {ep.name} ({ep.endpoint})
          </option>
        ))}
      </select>
    </div>
  );
}
