import React from "react";
import "./notes.scss";

export default function Notes() {
  return (
    <div className="notes" id="notes">
      <div className="hline">Notes</div>
      <div className="containor">
        {/* <a className="link1" href="https://www.google.co.in/"> */}
        <div className="nt">
          <div className="img">
            <a
              href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
             
            >
              <img src="assets/java.png" alt="" />
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
            
          >
            <div className="sname">JAVA</div>
          </a>
        </div>
        {/* </a> */}

        <div className="nt">
          <div className="img">
            <a
              href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
              
            >
              <img src="assets/c-.png" alt="" />
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
            
          >
            <div className="sname">C/C++</div>
          </a>
        </div>

        <div className="nt">
          <div className="img">
            <a
              href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
            >
              <img src="assets/python.png" alt="" />
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
          >
            <div className="sname">Python</div>
          </a>
        </div>
        <div className="nt">
          <div className="img">
            <a
              href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
            >
              <img src="assets/coding.png" alt="" />
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
          >
            <div className="sname">Html/Css</div>
          </a>
        </div>
        <div className="nt">
          <div className="img">
            <a
              href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
            >
              <img src="assets/android.png" alt="" />
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
          >
            <div className="sname">Android Studio</div>
          </a>
        </div>
        <div className="nt">
          <div className="img">
            <a
              href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
            >
              <img src="assets/edit.png" alt="" />
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
          >
            <div className="sname">DBMS</div>
          </a>
        </div>
        <div className="nt">
          <div className="img">
            <a
              href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
            >
              <img src="assets/edit.png" alt="" />
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1soDo04d-yYsuR1Kc4KVs7zfwPeAviHeV?usp=sharing"
          >
            <div className="sname">Node/Js</div>
          </a>
        </div>
      </div>
    </div>
  );
}
