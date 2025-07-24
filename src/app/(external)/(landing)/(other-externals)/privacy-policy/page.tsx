import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Genz.ad",
  description:
    "Privacy Policy for Genz.ad - Learn how we collect and use your information",
};
import { privacyData } from "@/app/(auth)/(terms-policy)/privacy/data";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

      <p className="mb-8">
        At <span className="font-medium">Genz.ad</span>, we respect your privacy
        and are committed to protecting your personal data. This Privacy Policy
        explains what information we collect and how we use it.
      </p>

      {privacyData.map((privacyItem, index) => (
        <section className="mb-8" key={index}>
          <h2 className="text-xl font-bold mb-3">
            {index + 1} . {privacyItem.title}
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            {privacyItem.points.map((point, ind) => (
              <li key={ind}>
                {point.split(":").length == 1 ? (
                  point.split(":")[0]
                ) : (
                  <>
                    <span className="font-medium">
                      {point.split(":")[0]} :{" "}
                    </span>
                    {point.split(":")[1]}
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="border-t border-gray-300 mt-10 pt-4"></div>
    </main>
  );
}
