import { Footer } from "flowbite-react";

function FooterComponent() {
    return (
      <Footer className="mt-3" container>
        <Footer.Copyright href="#" by="Edil Abdiaziz™" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">Home</Footer.Link>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    ) 
}

export default FooterComponent