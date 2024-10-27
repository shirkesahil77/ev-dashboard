import Papa from 'papaparse';

export const parseEVData = (setEvData) => {
  Papa.parse('./Electric_Vehicle_Population_Data.csv', {
    download: true,
    header: true,
    complete: (result) => {
      setEvData(result.data);
    },
  });
};
