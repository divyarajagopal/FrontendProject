
describe('UserRegistrationUI Component unit tests', () => {

    it('test.', done => {
        const mockSuccessResponse =  [{
         "obj1":   {
              "VALUE": 45600,
              "id": "BTCAUD",
              "image": 7,
              "name": "Bitcoin",
              "sname": "BTC/AUD",
            },
            "obj2":  {
              "VALUE": 3420,
              "id": "ETHAUD",
              "image": 8,
              "name": "Ether",
              "sname": "ETH/AUD",
            },
            "obj3": {
              "VALUE": 0.7457,
              "id": "XRPAUD",
              "image": 9,
              "name": "Ripple",
              "sname": "XRP/AUD",
            },
            "obj4": {
              "VALUE": 12.73,
              "id": "LINK-AUD",
              "image": 10,
              "name": "Link",
              "sname": "LNK/AUD",
            }
        }]
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        var globalRef:any =global;
        globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    
        
    
        done();
    });
    
    
      });
      