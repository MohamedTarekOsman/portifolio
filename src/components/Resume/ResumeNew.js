import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Mohamed_Tarek-Front.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ overflowX: 'hidden' }}>
        <Particle />
        <Row className="justify-content-center" style={{ position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center mt-3">
          <Document file={pdf} className="d-flex flex-column align-items-center" style={{ overflowX: 'hidden' }}>
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              renderMode="svg"
              
            />
            <br />
            <Page
              pageNumber={2}
              scale={width > 786 ? 1.7 : 0.6}
              renderMode="svg"
              
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
