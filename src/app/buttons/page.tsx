import {
  Arrowright,
  Headphone,
  Layout,
  Lens,
  Mail,
} from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-12">
          Button Components Examples
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 transform transition-all ">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">
              Default Variants
            </h2>
            <div className="space-y-3 space-x-2">
              <Button>Default Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 transform transition-all ">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">
              Custom Colors with ClassName
            </h2>
            <div className="space-y-3 space-x-2">
              <Button className="bg-[#FF6B6B] hover:bg-[#FF4444]">
                Custom Color
              </Button>
              <Button variant="purple" icon={<Arrowright />}>
                Purple Button
              </Button>
              <Button className="bg-[#4ECB71] hover:bg-[#3AA55D]">
                Green Button
              </Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 transform transition-all ">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">
              Size Variants
            </h2>
            <div className="space-y-3 space-x-2">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Layout />
                Icon
              </Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 transform transition-all ">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">
              Width Variants
            </h2>
            <div className="space-y-3 space-x-2">
              <Button width="auto">Auto Width</Button>
              <Button width="full">Full Width</Button>
              <Button width="fixed">Fixed Width</Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 transform transition-all ">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">
              Icons and Links
            </h2>
            <div className="space-y-3 space-x-2">
              <Button icon={<Arrowright />}>With Right Icon</Button>
              <Button variant="outline" icon={<Mail />}>
                Outline with Icon
              </Button>
              <Button href="/dashboard">Link Button</Button>
              <Button href="https://example.com" target="_blank">
                External Link
              </Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 transform transition-all ">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">
              States
            </h2>
            <div className="space-y-3 space-x-2">
              <Button disabled>Disabled Button</Button>
              <Button size="lg" variant="destructive">
                Large Destructive
              </Button>
              <Button variant="ghost" size="sm" icon={<Lens />}>
                Small Ghost
              </Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 transform transition-all ">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">
              Inputs
            </h2>
            <div className="space-y-3 space-x-2">
              <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" className="bg-white rounded-xs outline-none border-none text-black focus:border-ring" placeholder="Enter your email" />
                <Button type="submit" className="bg-[#CF54CF] text-white hover:bg-accent hover:text-accent-foreground">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
