import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import { FileAddOutlined } from "@ant-design/icons";
import Router from "next/router";
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();
  function handleSignOut() {
    signOut();
  }
  

  return <>{session ? User({ session, handleSignOut }) : Guest()}</>;
}
// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={"/login"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}

function User({ session, handleSignOut }) {
//   let PizZipUtils = null;
// if (typeof window !== "undefined") {
//     import("pizzip/utils/index.js").then(function (r) {
//         PizZipUtils = r;
//     });
// }

// function loadFile(url, callback) {
//     PizZipUtils.getBinaryContent(url, callback);
// }

// const generateDocument = () => {
   
//       axios
//     .get(template, {
//       responseType: "arraybuffer",
//     })
//     .then((response) => {
//       const content = response.data;
//       const zip = new PizZip(content);
//       const doc = new Docxtemplater().loadZip(zip);
//       // render the document (replace all occurrences of {first_name} by John, {last_name} by Doe, ...)
      
//       const data = {
//         items: [
//           { name1: 'Item 1',price:123 },
//           { name1: 'Item 2',price:145 },
//           { name1: 'Item 3',price:125 },
//         ],
//         name:"lalit kumar",
    
//       };
  
//       // Set the data for the template
//       doc.setData(data);
  
//       // Perform the rendering
//       doc.render();
//       const blob = doc.getZip().generate({
//         type: "blob",
//         mimeType:
//           "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       });
//       // Output the document using Data-URI
//       saveAs(blob, "output.docx");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };


  return (
    <>
      <Layout title="Dashboard" paddingTop='60px'>
        <div className={styles.dashboard_con}>
          <div className={styles.DashBoxs}>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6 d-flex">
                <div className={`${styles.dash_count} ${styles.dash_count}`}>
                  <div className={styles.dash_counts}>
                    <h4>10</h4>
                    <h5>Client</h5>
                  </div>
                  <div className={styles.dash_imgs}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6 d-flex">
                <div className={`${styles.dash_count} ${styles.das1}`}>
                  <div className={styles.dash_counts}>
                    <h4>134</h4>
                    <h5>Grades</h5>
                  </div>
                  <div className={styles.dash_imgs}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user-check"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6 d-flex">
                <div className={`${styles.dash_count} ${styles.das2}`}>
                  <div className={styles.dash_counts}>
                    <h4>145</h4>
                    <h5>Month Report </h5>
                  </div>
                  <div className={styles.dash_imgs}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file-text"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6 d-flex">
                <div className={`${styles.dash_count} ${styles.das3}`}>
                  <div className={styles.dash_counts}>
                    <h4>5</h4>
                    <h5>Today Report</h5>
                  </div>
                  <div className={styles.dash_imgs}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* <div className="">
<button onClick={generateDocument}>Generate Document</button>
</div> */}
          <div className={styles.reportButon}>
            <button
            
              className={styles.reportBtn}
              shape="round"
              onClick={() => Router.push("/Report")}
            >
              <FileAddOutlined /> <span className={styles.reportText}>Report</span>
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
