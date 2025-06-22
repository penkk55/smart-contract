const solc = require('solc');

const source = `
pragma solidity ^0.8.0;
contract Hello {
  function greet() public pure returns (string memory) {
    return "Hello, World!";
  }
}
`;

const input = {
  language: 'Solidity',
  sources: {
    'Hello.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output.contracts['Hello.sol'].Hello);
