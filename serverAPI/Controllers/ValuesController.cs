using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Cors;
using System.Web.Http;


namespace ServerAPI.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class ValuesController : ApiController
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Hotel> GetHotels()
        {
            return HotelsListData.getHotels();
        }

        // GET api/values/5
        [HttpGet]
        public Hotel GetHotelDetails(string hotelCode)
        {
            return HotelsListData.getHotelDetils(hotelCode);
        }

        // POST api/values
        [HttpPost]
        public IEnumerable<Hotel> Insert(Hotel item)
        {
            return HotelsListData.InsertHotel(item);
        }

        // PUT api/values/5
        [HttpPut]
        public bool Put(string hotelCode,float price)
        {
            return HotelsListData.UpdateHotel(hotelCode, price);
        }

        // DELETE api/values/5
        [HttpDelete]
        public bool Delete(string hotelCode)
        {
            return HotelsListData.deleteHotel(hotelCode);
        }
    }
}
