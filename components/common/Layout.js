import Head from "next/head";
import { Container } from "@interchain-ui/react";

export function Layout({ children }) {
  return (
    <Container maxWidth="64rem" attributes={{ py: "$14" }}>
   
      {children}
    </Container>
  );
}
