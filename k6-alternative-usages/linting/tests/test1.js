    // Pure load-testing, no polly, no simmy, just a simple run to see how the workshop is structured and make sure things run
    // Start the API with running the build task called watch (it will start the API and reload it on changes)
    // Try to read and look at the stats... If you want to you can play with parameters such as the delay in the controller, length of test-run,
    // concurrency etc and see how it affects the max RPS (requests pr second) 
 
    import http from "k6/http";
    import { check } from "k6";
    import { setupFromScenario } from "../utils/helpers";
        
    export let options = setupFromScenario("local");
    
    export default function() {
        
      let response = http.get("http://localhost:5000/weatherforecast_intro");
    
      check( response, { "200 OK": res => res.status === 200 } );
    
    };
    