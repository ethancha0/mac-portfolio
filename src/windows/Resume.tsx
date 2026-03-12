import WindowWrapper from '../hoc/WindowWrapper'
import WindowControls from '../components/WindowControls'
import { Download } from 'lucide-react'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

//react pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


const Resume = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="resume"/>
            <h2 className="pl-2"> Resume.pdf</h2>

            <a 
            href="files/Ethan_Chao_resume.pdf"
            download
            title="Download resume"

            >
                <Download className="icon cursor-pointer"/>
            </a>


        </div>
      <Document file="files/Ethan_Chao_resume.pdf">
        <Page pageNumber={1}
        renderTextLayer
        renderAnnotationLayer
         />
      </Document>
    
    </>
  )
}


const ResumeWindow = WindowWrapper(Resume, "resume")
export default ResumeWindow
