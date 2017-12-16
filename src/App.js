import React, { Component } from 'react'
import RegressionDataComputation from '../build/contracts/RegressionDataComputation.json'
import getWeb3 from './utils/getWeb3'

import 'bulma/css/bulma.css'
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      regressionDataComputationInstance: null, 
      balance: 0,

      depositThresholdDisplay: 0,
      computationNodesCeilingDisplay: 0,
      splitSizeDisplay: 0,
      computationFeesThresholdDisplay: 0,
      computationPeriodInSecondDisplay: 0,
      checkingPeriodInSecondDisplay: 0,
      requestCeilingPerRequesterDisplay: 0,

      depositThreshold: 0,
      computationNodesCeiling: 0,
      splitSize: 0,
      computationFeesThreshold: 0,
      computationPeriodInSecond: 0,
      checkingPeriodInSecond: 0,
      requestCeilingPerRequester: 0,

      depositThresholdReset: 0,
      computationNodesCeilingReset: 0,
      splitSizeReset: 0,
      computationFeesThresholdReset: 0,
      computationPeriodInSecondReset: 0,
      checkingPeriodInSecondReset: 0,
      requestCeilingPerRequesterReset: 0,      

      deposit: 0,
      contribution: 0,
      requestIDForComputation: 0, 

      requesterAddress: '',
      dataStorerAddress: '',

      sharesSize: 0,
      computationNodesSize: 0,
      pendingNodesSize: 0, 
      requestersSize: 0,
      dataStorersSize: 0,

      requestsSize: 0, 
      fees: 0, 
      requestID: 0,
      from: '',
      to: '',

      count: 0,
      valid: '', 

      requestIDForResult: 0,
      X: 0,
      Y: 0,
      XY: 0,
      XSQ: 0, 

      timePassed: 0
    }

    this.handleNumberInputChange = this.handleNumberInputChange.bind(this)
    this.handleStringInputChange = this.handleStringInputChange.bind(this)
    this.instantiateContract = this.instantiateContract.bind(this)
    this.refreshBalance = this.refreshBalance.bind(this)

    this.register = this.register.bind(this)
    this.withdraw = this.withdraw.bind(this)
    this.contribute = this.contribute.bind(this)
    this.compute = this.compute.bind(this)

    this.setDepositThreshold = this.setDepositThreshold.bind(this)
    this.setComputationNodesCeiling = this.setComputationNodesCeiling.bind(this)
    this.setSplitSize = this.setSplitSize.bind(this)
    this.setComputationFeesThreshold = this.setComputationFeesThreshold.bind(this)
    this.setComputationPeriodInSecond = this.setComputationPeriodInSecond.bind(this)
    this.setCheckingPeriodInSecond = this.setCheckingPeriodInSecond.bind(this)
    this.setRequestCeilingPerRequester = this.setRequestCeilingPerRequester.bind(this)

    this.restore = this.restore.bind(this)
    this.addRequester = this.addRequester.bind(this)
    this.addDataStorer = this.addDataStorer.bind(this)
    this.declareComputationStart = this.declareComputationStart.bind(this)
    this.declareCheckingEnd = this.declareCheckingEnd.bind(this)

    this.request = this.request.bind(this)
    this.cancel = this.cancel.bind(this)

    this.addShare = this.addShare.bind(this)
    this.store = this.store.bind(this)

    this.checkResult = this.checkResult.bind(this)
  }

  componentWillMount() {
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const regressionDataComputation = contract(RegressionDataComputation)
    regressionDataComputation.setProvider(this.state.web3.currentProvider)

    this.state.web3.eth.getAccounts((error, accounts) => {
      regressionDataComputation.new(this.state.depositThreshold, this.state.computationNodesCeiling, this.state.splitSize, this.state.computationFeesThreshold, this.state.computationPeriodInSecond, this.state.checkingPeriodInSecond, this.state.requestCeilingPerRequester, {from: accounts[0]}).then((instance) => {
        console.log(instance)
        this.setState({ regressionDataComputationInstance: instance })
        return this.state.regressionDataComputationInstance.depositThreshold()
      }).then((result) => {
        this.setState({ depositThresholdDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.computationNodesCeiling()
      }).then((result) => {
        this.setState({ computationNodesCeilingDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.splitSize()
      }).then((result) => {
        this.setState({ splitSizeDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.computationFeesThreshold()
      }).then((result) => {
        this.setState({ computationFeesThresholdDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.computationPeriodInSecond()
      }).then((result) => {
        this.setState({ computationPeriodInSecondDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.checkingPeriodInSecond()
      }).then((result) => {
        this.setState({ checkingPeriodInSecondDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.requestCeilingPerRequester()
      }).then((result) => {
        this.setState({ requestCeilingPerRequesterDisplay: result.toNumber() })
        alert("Contract Instantiation Succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  handleNumberInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: Number(value) }); 
  }

  handleStringInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  startPolling() {
    this.interval = setInterval(() => {
      this.poll()
    }, 1000)
  }

  poll() {
    this.setState({ timePassed: this.state.timePassed + 1 })
  }

  refreshBalance() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.checkBalance({from : accounts[0]}).then((result) => {
        this.setState({ balance: result.toNumber() })
        alert("Refreshed")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  register() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.register({from: accounts[0], value: this.state.deposit}).then(() => {
        return this.state.regressionDataComputationInstance.checkBalance({from: accounts[0]})
      }).then((result) => {
        this.setState({ balance: result.toNumber() })
        return this.state.regressionDataComputationInstance.getComputationNodesSize()
      }).then((result) => {
        this.setState({ computationNodesSize: result.toNumber() })
        return this.state.regressionDataComputationInstance.getPendingNodesSize()
      }).then((result) => {
        this.setState({ pendingNodesSize: result.toNumber() })
        alert("Your registration succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  withdraw() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.withdraw({from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.checkBalance({from : accounts[0]})
      }).then((result) => {
        this.setState({ balance: result.toNumber() })
        return this.state.regressionDataComputationInstance.getComputationNodesSize()
      }).then((result) => {
        this.setState({ computationNodesSize: result.toNumber() })
        return this.state.regressionDataComputationInstance.getPendingNodesSize()
      }).then((result) => {
        this.setState({ pendingNodesSize: result.toNumber() })
        alert("Your withdrawal succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  contribute() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.contribute({from: accounts[0], value: this.state.contribution}).then(() => {
        return this.state.regressionDataComputationInstance.checkBalance({from: accounts[0]})
      }).then((result) => {
        this.setState({ balance: result.toNumber() })
        alert("You've successfully made a contribution")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  compute() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.compute(this.state.requestIDForComputation, {from: accounts[0]}).then(() => {
        alert("Your've successfully submitted your computation")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  setDepositThreshold() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.setDepositThreshold(this.state.depositThresholdReset, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.depositThreshold()
      }).then((result) => {
        this.setState({ depositThresholdDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.getComputationNodesSize()
      }).then((result) => {
        this.setState({ computationNodesSize: result.toNumber() })
        return this.state.regressionDataComputationInstance.getPendingNodesSize()
      }).then((result) => {
        this.setState({ pendingNodesSize: result.toNumber() })
        alert("Your reset of deposit threshold succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  setComputationNodesCeiling() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.setComputationNodesCeiling(this.state.computationNodesCeilingReset, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.computationNodesCeiling()
      }).then((result) => {
        this.setState({ computationNodesCeilingDisplay: result.toNumber() })
        return this.state.regressionDataComputationInstance.getComputationNodesSize()
      }).then((result) => {
        this.setState({ computationNodesSize: result.toNumber() })
        return this.state.regressionDataComputationInstance.getPendingNodesSize()
      }).then((result) => {
        this.setState({ pendingNodesSize: result.toNumber() })
        alert("Your reset of computation nodes ceiling succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  setSplitSize() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.setSplitSize(this.state.splitSizeReset, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.splitSize()
      }).then((result) => {
        this.setState({ splitSizeDisplay: result.toNumber() })
        alert("Your reset of split size succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  setComputationFeesThreshold() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.setComputationFeesThreshold(this.state.computationFeesThresholdReset, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.computationFeesThreshold()
      }).then((result) => {
        this.setState({ computationFeesThresholdDisplay: result.toNumber() })
        alert("Your reset of computation fees succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  setComputationPeriodInSecond() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.setComputationPeriodInSecond(this.state.computationPeriodInSecondReset, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.computationPeriodInSecond()
      }).then((result) => {
        this.setState({ computationPeriodInSecondDisplay: result.toNumber() })
        alert("Your reset of computation period in second succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  setCheckingPeriodInSecond() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.setCheckingPeriodInSecond(this.state.checkingPeriodInSecondReset, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.checkingPeriodInSecond()
      }).then((result) => {
        this.setState({ checkingPeriodInSecondDisplay: result.toNumber() })
        alert("Your reset of checking period in second succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    }) 
  }

  setRequestCeilingPerRequester() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.setRequestCeilingPerRequester(this.state.requestCeilingPerRequesterReset, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.requestCeilingPerRequester()
      }).then((result) => {
        this.setState({ requestCeilingPerRequesterDisplay: result.toNumber() })
        alert("Your reset of request ceiling per requester succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    }) 
  }

  restore() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.restore({from: accounts[0]}).then(() => {
        alert("Your've successfully restored the shares")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  addRequester() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.addRequester(this.state.requesterAddress, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.getRequestersSize()
      }).then((result) => {
        this.setState({ requestersSize: result.toNumber() })
        alert("You've successfully added a requester")
      }).catch((err) => {
        console.log(err.message)
      })
    }) 
  }

  addDataStorer() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.addDataStorer(this.state.dataStorerAddress, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.getDataStorersSize()
      }).then((result) => {
        this.setState({ dataStorersSize: result.toNumber() })
        alert("You've successfully added a data storer")
      }).catch((err) => {
        console.log(err.message)
      })
    }) 
  }

  declareComputationStart() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.declareComputationStart({from: accounts[0]}).then(() => {
        this.startPolling()
        alert("You've successfully started the computation period")
      }).catch((err) => {
        console.log(err.message)
      })
    })        
  }

  declareCheckingEnd() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.declareCheckingEnd({from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.checkBalance({from : accounts[0]})
      }).then((result) => {
        this.setState({ balance: result.toNumber() })
        return this.state.regressionDataComputationInstance.getComputationNodesSize()
      }).then((result) => {
        this.setState({ computationNodesSize: result.toNumber() })
        return this.state.regressionDataComputationInstance.getPendingNodesSize()
      }).then((result) => {
        this.setState({ pendingNodesSize: result.toNumber() })
        return this.state.regressionDataComputationInstance.getTotalRequestsNumber()
      }).then((result) => {
        this.setState({ requestsSize: result.toNumber(), timePassed: 0, X: 0, Y: 0, XY: 0, XSQ: 0 })
        clearInterval(this.interval)
        alert("You've successfully ended the checking period")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  request() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      var fromRevised = this.state.from.split("-")
      var toRevised = this.state.to.split("-")

      var fromYear = Number(fromRevised[0])
      var fromMonth = Number(fromRevised[1])
      var fromDay = Number(fromRevised[2])

      var toYear = Number(toRevised[0])
      var toMonth = Number(toRevised[1])
      var toDay = Number(toRevised[2])

      this.state.regressionDataComputationInstance.request(this.state.requestID, [fromYear, fromMonth, fromDay], [toYear, toMonth, toDay], {from: accounts[0], value: this.state.fees}).then(() => {
        return this.state.regressionDataComputationInstance.getTotalRequestsNumber()
      }).then((result) => {
        this.setState({ requestsSize: result.toNumber() })
        alert("Your request submission succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  cancel() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.cancel(this.state.requestID, {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.getTotalRequestsNumber()
      }).then((result) => {
        this.setState({ requestsSize: result.toNumber() })
        alert("Your request cancellation succeeded")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  addShare() {
    if(this.state.count < this.state.splitSizeDisplay) {
      var newdiv = document.createElement('div');
      newdiv.innerHTML = "<label>X" + this.state.count + ": <input name='X" + this.state.count + "' type='number' value=0 /></label>" + 
                         "<label>Y" + this.state.count + ": <input name='Y" + this.state.count + "' type='number' value=0 /></label>" + 
                         "<label>XY" + this.state.count + ": <input name='XY" + this.state.count + "' type='number' value=0 /></label>" + 
                         "<label>XSQ" + this.state.count + ": <input name='XSQ" + this.state.count + "' type='number' value=0 /></label>" 
      document.getElementById('dynamicInput').appendChild(newdiv)
      this.setState({ count: this.state.count + 1 })

    } else if(this.state.count === this.state.splitSizeDisplay && this.state.splitSizeDisplay !== 0) {

      var newdiv2 = document.createElement('div');
      newdiv2.innerHTML = "<label>From: <input name='valid' type='date'/></label>"
      document.getElementById('dynamicInput').appendChild(newdiv2)

      var newbutton = document.createElement("button")
      newbutton.className="button is-info is-small"
      newbutton.onclick = this.store
      newbutton.innerHTML = 'Submit Shares'
      document.getElementById('dynamicInput').appendChild(newbutton)

      this.setState({ count: this.state.count + 1 })
    } 
  }

  store() {
    var validRevised = document.getElementsByName("valid")[0].value.split("-")
    var validYear = Number(validRevised[0])
    var validMonth = Number(validRevised[1])
    var validDay = Number(validRevised[2])

    var XShares = []
    var YShares = []
    var XYShares = []
    var XSQShares = []

    for(var i = 0; i < this.state.splitSizeDisplay; i++) {
      XShares.push(Number(document.getElementsByName("X" + i)[0].value))
      YShares.push(Number(document.getElementsByName("Y" + i)[0].value))
      XYShares.push(Number(document.getElementsByName("XY" + i)[0].value))
      XSQShares.push(Number(document.getElementsByName("XSQ" + i)[0].value))
    }

    var node = document.getElementById("dynamicInput")
    while(node.firstChild)
      node.removeChild(node.firstChild)
    this.setState({ count: 0 })

    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.store(XShares, YShares, XYShares, XSQShares, [validYear, validMonth, validDay], {from: accounts[0]}).then(() => {
        return this.state.regressionDataComputationInstance.getTotalNumberOfShares()
      }).then((result) => {
        this.setState({ sharesSize: result.toNumber() })
        alert("You've successfully stored the data")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  checkResult() {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.regressionDataComputationInstance.checkResult(this.state.requestIDForResult, {from: accounts[0]}).then((result) => {
        this.setState({ X: result[0].toNumber(), Y: result[1].toNumber(), XY: result[2].toNumber(), XSQ: result[3].toNumber() })
        alert("The result is ready for checking")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  render() {
    return (
      <div className="Regression Data Computation Demo">
        <section className="hero is-info is-small is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">COMP 4805 Final Year Project Demo Site</h1>
              <h2 className="subtitle">Blockchain Research and Implementation</h2>
            </div>
          </div>
        </section>

        <div className="box cta">
          <p className="has-text-centered">
            <span className="tag is-primary">Deposit Threshold: {this.state.depositThresholdDisplay}</span>
            <span className="tag is-primary">Computation Nodes Ceiling: {this.state.computationNodesCeilingDisplay}</span>
            <span className="tag is-primary">Split Size: {this.state.splitSizeDisplay}</span>
            <span className="tag is-primary">Computation Fees Threshold: {this.state.computationFeesThresholdDisplay}</span>
            <span className="tag is-primary">Computation Period In Second: {this.state.computationPeriodInSecondDisplay}</span>
            <span className="tag is-primary">Checking Period In Second: {this.state.checkingPeriodInSecondDisplay}</span>
            <span className="tag is-primary">Request Ceiling Per Requester: {this.state.requestCeilingPerRequesterDisplay}</span>
          </p>
        </div>

        <section className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <section className="hero is-dark is-bold is-small promo-block">
                <h1 className="title has-text-centered">Your Balance: {this.state.balance} </h1>
                <button className="button is-warning is-small" onClick={this.refreshBalance}>Refresh Balance</button> 
              </section>
            </div>
          </div>


          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <div className="instantiateContract">
                      <h1 className="title">Instantiate Contract</h1>
                      <label>Deposit Threshold: <input name="depositThreshold" type="number" value={this.state.depositThreshold} onChange={this.handleNumberInputChange} /></label>
                      <label>Computation Nodes Ceiling: <input name="computationNodesCeiling" type="number" value={this.state.computationNodesCeiling} onChange={this.handleNumberInputChange} /></label>
                      <label>Split Size: <input name="splitSize" type="number" value={this.state.splitSize} onChange={this.handleNumberInputChange} /></label>
                      <label>Computation Fees Threshold: <input name="computationFeesThreshold" type="number" value={this.state.computationFeesThreshold} onChange={this.handleNumberInputChange} /></label>
                      <label>Computation Period In Second: <input name="computationPeriodInSecond" type="number" value={this.state.computationPeriodInSecond} onChange={this.handleNumberInputChange} /></label>
                      <label>Checking Period In Second: <input name="checkingPeriodInSecond" type="number" value={this.state.checkingPeriodInSecond} onChange={this.handleNumberInputChange} /></label>
                      <label>Request Ceiling Per Requester: <input name="requestCeilingPerRequester" type="number" value={this.state.requestCeilingPerRequester} onChange={this.handleNumberInputChange} /></label>
                      <button className="button is-dark" onClick={this.instantiateContract}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <section className="info-tiles">
                <div className="tile is-ancestor has-text-centered">
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.sharesSize}</p>
                      <p className="subtitle">Total Number of Shares</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.computationNodesSize}</p>
                      <p className="subtitle">Total Number of Computation Nodes</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.pendingNodesSize}</p>
                      <p className="subtitle">Total Number of Pending Nodes</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.requestersSize}</p>
                      <p className="subtitle">Total Number of Requesters</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.dataStorersSize}</p>
                      <p className="subtitle">Total Number of Data Storers</p>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div className="card events-card">
                <header className="card-header"><p className="card-header-title">Computation Node's Dashboard</p></header>
                <div className="card-table">
                  <div className="content">
                    <table className="table is-fullwidth is-striped">
                      <tbody>
                        <tr>
                          <td><button className="button is-small is-primary" onClick={this.register}>Register: </button></td>
                          <td>Deposit: <input name="deposit" type="number" value={this.state.deposit} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-primary" onClick={this.withdraw}>Withdraw</button></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-primary" onClick={this.contribute}>Contribute</button></td>
                          <td>Contribution: <input name="contribution" type="number" value={this.state.contribution} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-primary" onClick={this.compute}>Compute</button></td>
                          <td>Request ID: <input name="requestIDForComputation" type="number" value={this.state.requestIDForComputation} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-5">
              <div className="card events-card">
                <header className="card-header"><p className="card-header-title">Initiator's Dashboard</p></header>
                <div className="card-table">
                  <div className="content">
                    <table className="table is-fullwidth is-striped">
                      <tbody>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.restore}>Restore</button></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.declareComputationStart}>Start Computation</button></td>
                          <td></td>
                        </tr>
                         <tr>
                          <td><button className="button is-small is-danger" onClick={this.declareCheckingEnd}>End Checking</button></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.addRequester}>Add Requester</button></td>
                          <td>Address: <input name="requesterAddress" type="text" value={this.state.requesterAddress} onChange={this.handleStringInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.addDataStorer}>Add Data Storer</button></td>
                          <td>Address: <input name="dataStorerAddress" type="text" value={this.state.dataStorerAddress} onChange={this.handleStringInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.setDepositThreshold}>Reset</button></td>
                          <td>Deposit Threshold: <input name="depositThresholdReset" type="number" value={this.state.depositThresholdReset} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.setComputationNodesCeiling}>Reset</button></td>
                          <td>Computation Nodes Ceiling: <input name="computationNodesCeilingReset" type="number" value={this.state.computationNodesCeilingReset} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.setSplitSize}>Reset</button></td>
                          <td>Split Size: <input name="splitSizeReset" type="number" value={this.state.splitSizeReset} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.setComputationFeesThreshold}>Reset</button></td>
                          <td>Computation Fees Threshold: <input name="computationFeesThresholdReset" type="number" value={this.state.computationFeesThresholdReset} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.setComputationPeriodInSecond}>Reset</button></td>
                          <td>Computation Period In Second: <input name="computationPeriodInSecondReset" type="number" value={this.state.computationPeriodInSecondReset} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.setCheckingPeriodInSecond}>Reset</button></td>
                          <td>Checking Period In Second: <input name="checkingPeriodInSecondReset" type="number" value={this.state.checkingPeriodInSecondReset} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                        <tr>
                          <td><button className="button is-small is-danger" onClick={this.setRequestCeilingPerRequester}>Reset</button></td>
                          <td>Request Ceiling Per Requester: <input name="requestCeilingPerRequesterReset" type="number" value={this.state.requestCeilingPerRequesterReset} onChange={this.handleNumberInputChange} /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="title has-text-centered">Total Number of Requests: {this.state.requestsSize} </h1> 
          <p className="subtitle has-text-centered">Time Passed In Second After The Start Declaration: {this.state.timePassed}</p><br/>     
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="box">
                <div className="request">
                  <p>Requester's Dashboard</p>
                  <label>Request ID: <input name="requestID" type="number" value={this.state.requestID} onChange={this.handleNumberInputChange} /></label>
                  <label>Fees: <input name="fees" type="number" value={this.state.fees} onChange={this.handleNumberInputChange} /></label>
                  <label>From: <input name="from" type="date" value={this.state.from} onChange={this.handleStringInputChange} /></label>
                  <label>To: <input name="to" type="date" value={this.state.to} onChange={this.handleStringInputChange} /></label>
                  <button className="button is-info is-small" onClick={this.request}>Add Request</button>
                  <button className="button is-link is-small" onClick={this.cancel}>Cancel Request</button>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="box">
                <div className="store">
                  <p>Data Storer's Dashboard</p>
                    <button className="button is-warning is-small" onClick={this.addShare}>Add Share</button> 
                    <div id="dynamicInput" className="addShares"></div>
                </div>
              </div>
            </div>
          </div>     

          <div className="columns">
            <div className="column is-4 is-offset-1">
              <div className="box">
                <div className="store">
                  <p>Computation Result</p>
                    <label>Request ID: <input name="requestIDForResult" type="number" value={this.state.requestIDForResult} onChange={this.handleNumberInputChange} /></label>
                    <button className="button is-dark is-small" onClick={this.checkResult}>Check</button> 
                </div>
              </div>
            </div>

            <div className="column is-6">
              <section className="info-tiles">
                <div className="tile is-ancestor has-text-centered">
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.X}</p>
                      <p className="subtitle">The Value of X</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.Y}</p>
                      <p className="subtitle">The Value of Y</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.XY}</p>
                      <p className="subtitle">The Value of XY</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="title is-child box">
                      <p className="title">{this.state.XSQ}</p>
                      <p className="subtitle">The Value of XSQ</p>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>     

        </section>
      </div>
    );
  }
}

export default App
