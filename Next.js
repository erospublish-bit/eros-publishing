<Script
  src="https://js.lulu.com/lulu-buy.js"
  strategy="afterInteractive"
  onReady={() => setLuluReady(true)}
/>

{luluReady ? (
  createElement("lulu-buy-button", {
    "buy-button-id": "4b7dbcee-c35c-4ead-9c0a-63ec364c0b9a",
    variant: "product-showcase",
  })
) : (
  <p role="status">Loading secure purchase options…</p>
)}