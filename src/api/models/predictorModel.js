import { spawn } from 'child_process';

 const predict = (inputText) => {
    return new Promise((resolve, reject) => {
  
        // Spawn a new Python process
        const py = spawn('python', ['./src/api/models/predict.py', inputText]);
       
        // Handle the data event for standard output
        py.stdout.on('data', (data) => {
            resolve(data.toString().trim());
        
        });
  // Handle the error event
  py.stderr.on('data', (data) => {
    console.error(`Python stderr: ${data.toString()}`);  // Debugging line
});

        // Handle the error event
        py.on('error', (err) => {
            reject('Failed to start Python process:', err);
        });

        // Handle the close event
        py.on('close', (code) => {
            if (code !== 0) {
                reject(`Python process exited with code ${code}`);
            }
        });
    });
};
export default predict;


