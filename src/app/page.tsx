"use client";
import { Button } from "@/components/buttons/button.styled.component";
import FormField from "@/components/form/form.component";
import { FormErrorMessage } from "@/components/form/form.styled.component";

export default function Home() {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <FormField buttonLabel="login" title="login" />
        <FormField
          buttonLabel="register"
          title="create new account"
          createAccount
        />
        <FormErrorMessage>Error toast</FormErrorMessage>
      </div>

      <div style={{ margin: "10px", display: "flex", gap: "10px" }}>
        <Button>default</Button>
        <Button variant="primary">primary</Button>
        <Button variant="standard">standard</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="success">success</Button>
        <Button variant="premium">premium</Button>
        <Button variant="destructive">destructive</Button>
      </div>
    </div>
  );
}
