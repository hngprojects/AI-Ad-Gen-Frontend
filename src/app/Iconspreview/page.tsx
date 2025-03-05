import {
  Ai,
  Arrowdown,
  Arrowright,
  Arrowsoliddown,
  Document,
  Download,
  Edit,
  Eye,
  Facebook,
  Gear,
  Headphone,
  Home,
  Imageicon,
  Instagram,
  Layout,
  Lens,
  Linkedin,
  History,
  Location,
  Logout,
  Magicwand,
  Mail,
  Phone,
  Plus,
  Rocket,
  Tick,
  Toggle,
  Twitter,
  Videoicon,
} from "@/components/icons/icon";

const page = () => {
  return (
    <div>
      <h1 style={{ fontSize: "24px", textAlign: "center", margin: "50px 0" }}>
        This is the preview page for all the icons inside
        &apos;@/components/icons/icon.tsx&apos;
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "16px",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--foreground)",
          width: "100%",
          padding: "16px",
          maxWidth: "1000px",
          margin: "50px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Mail />
          <span> Mail</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Layout />
          <span> Layout</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Home />
          <span> Home</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Plus />
          <span> Plus</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <History />
          <span> History</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Toggle />
          <span> Toggle</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Arrowdown />
          <span> Arrowdown</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Gear />
          <span> Gear</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Headphone />
          <span> Headphone</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logout />
          <span> Logout</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Rocket />
          <span> Rocket</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tick />
          <span> Tick</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Phone />
          <span> Phone</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Location />
          <span> Location</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Linkedin />
          <span> Linkedin</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Facebook />
          <span> Facebook</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Twitter />
          <span> Twitter</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Instagram />
          <span> Instagram</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Arrowsoliddown />
          <span> Arrowsoliddown</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Arrowright />
          <span> Arrowright</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Magicwand />
          <span> Magicwand</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Edit />
          <span> Edit</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Imageicon />
          <span> Imageicon</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Videoicon />
          <span> Videoicon</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Ai />
          <span> Ai</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Document />
          <span> Document</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Eye />
          <span> Eye</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Download />
          <span> Download</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Lens />
          <span> Lens</span>
        </div>
      </div>
    </div>
  );
};

export default page;
