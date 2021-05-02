module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "modulePathIgnorePatterns": [
        "<rootDir>/dist/"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}