import React from 'react';
import PapaParse from 'papaparse';


const uploadComponentStyle={

}

const UploadComponent = ({updateData}) =>{
  
    const fileHandler = e =>{
        let reader = new FileReader();
        
        reader.onload = event => {
            const csvData = PapaParse.parse(event.target.result,{});
            updateData(csvData.data);
          };
    
          reader.readAsText(e.target.files[0]);
    };

    return (
        <div>
            <input 
                style={uploadComponentStyle} 
                type='file' 
                accept='text/csv' 
                onChange={e=>fileHandler(e)}
            />
        </div>
    );
};

export default UploadComponent;
