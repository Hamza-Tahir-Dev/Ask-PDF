// pages/index.js
import Sidebar from '../components/Sidebar';
import PDFViewer from '../components/PDFViewer';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <PDFViewer />
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;
