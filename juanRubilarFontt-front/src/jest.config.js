module.exports = {
    testEnvironmment:'jest-environment-jsdom',
    setupFiles : ['./jest.setup.js'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
}
