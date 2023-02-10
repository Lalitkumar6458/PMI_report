import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import styles from '../styles/Home.module.css';

//Dynamically import the Smart.Grid component
const Grid = dynamic(() => import('smart-webcomponents-react/grid'), {
  ssr: false, //no server-side rendering 
  loading: () => <p>Loading...</p>
});

const Table = () => {
   
    const columns = [{
        label: 'ID',
        dataField: 'id',
        width: 200
      },
      {
        label: 'Name',
        dataField: 'name',
        editor: {
			template: 'autoComplete',
			autoOpen: true,
			dropDownButtonPosition: 'right'
		}
      }],
      
      sorting = {
        enabled: true
      },
      editing = {
        enabled: true,
		mode: 'cell'
		// enabled: true,
		// mode: 'row',
        // action: 'none',
		// dialog: {
		// 	enabled: true
		// },
        // commandColumn: {
		// 	visible: true,
		// 	position: 'far'
		// },addNewRow: {
		// 	visible: true,
		// 	position: 'both'
		// }
	},
      filtering = {
        enabled: true
      },
      
      selection = {
          enabled: true,
          checkBoxes: {
            enabled: true
          }
      },
        
      dataSource = [
              {id: 1, name: 'Hydrogen'},
              {id: 2, name: 'Helium'},
              {id: 3, name: 'Lithium'},
              {id: 4, name: 'Beryllium'},
              {id: 5, name: 'Boron'},
              {id: 6, name: 'Carbon'},
              {id: 7, name: 'Nitrogen'},
              {id: 8, name: 'Oxygen'},
              {id: 9, name: 'Fluorine'},
              {id: 10, name: 'Neon'},
              {id: 11, name: 'Sodium'},
              {id: 12, name: 'Magnesium'},
              {id: 13, name: 'Aluminum'},
              {id: 14, name: 'Silicon'},
              {id: 15, name: 'Phosphorus'},
              {id: 16, name: 'Sulfur'},
              {id: 17, name: 'Chlorine'},
              {id: 18, name: 'Argon'},
              {id: 19, name: 'Potassium'},
              {id: 20, name: 'Calcium'}
        ],
        dataSourceSettings = {
          dataFields: [
            { name: 'id', dataType: 'number' },
            { name: 'name', dataType: 'string' }
          ]
        };
    
      return (
        <div className={styles.container}>
        
    
         
    
            <Grid id="grid" sorting={sorting} filtering={filtering} columns={columns} editing={editing} selection={selection} dataSource={dataSource} dataSourceSettings={dataSourceSettings}></Grid>
       
    
        
        </div>
      );
}

export default Table