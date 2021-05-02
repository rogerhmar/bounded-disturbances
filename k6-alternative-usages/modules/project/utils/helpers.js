const Scenario = { "local": 1, "default": 2 }
Object.freeze(Scenario)

function setupFromScenario(scenario) {
    const config = {
        vus: 50,
        duration: "1m",
        rps: 500, //max requests per second, increase to go faster
        discardResponseBodies: true,
        insecureSkipTLSVerify: true, //ignore that localhost cert doesn't match host.docker.internal
        thresholds: {
            '200 OK rate': ['rate>0.99'],
            'http_req_duration': ['p(95)<1000'],
            "Errors": ["rate<0.01"],
            "Content OK": ["count>200"]
        }
    };

    switch (scenario) {
        case Scenario.local:
            config.vus = 1;
            config.iterations = 1;
        default:
            return config;
    }
}

export { setupFromScenario, Scenario };