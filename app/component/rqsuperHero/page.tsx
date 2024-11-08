// "use client";
// import React, { Suspense } from "react";

// import Test from "@/app/api/test2/page";
// import { useQueryParam } from "@/app/hooks/useParamsQuery";

// function  TestComponent() {
//   const propertyId = useQueryParam("id");

//   if (!propertyId) {
//     return <p>Loading property...</p>;
//   }

//   return <Test propertyId={propertyId} />;
// }

// export default function EditListingPage() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <TestComponent />
//     </Suspense>
//   );
// }

import React from 'react'

const TestComponent = () => {
  return (
    <div>
        <p>Testcomp</p>
    </div>
  )
}

export default TestComponent
