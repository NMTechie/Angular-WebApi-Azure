using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerAPI
{
    public static class HotelsListData
    {
        private static List<Hotel> hotelList = new List<Hotel>();
        
        public static List<Hotel> getHotels()
        {
            if (hotelList!=null && hotelList.Count == 0)
            {
                for (int i = 1; i <= 10; i++)
                {
                    Hotel item = new Hotel() { HotelName = "HotelName" + i.ToString(),HotelCode=i.ToString(),HotelLocation="Locatuon"+(i*2).ToString(),HotelPrice=i*20.5f };
                    hotelList.Add(item);
                }
            }
            return hotelList;
        }

        public static Hotel getHotelDetils(string hotelCode)
        {
            Hotel retVal=new Hotel();
            if (hotelList != null && hotelList.Count > 0)
            {
                retVal = (from hotel in hotelList where hotel.HotelCode == hotelCode select hotel).FirstOrDefault();
            }
            return retVal;
        }

        public static bool deleteHotel(string hotelCode)
        {
            bool retVal=false;
            if (hotelList != null && hotelList.Count > 0)
            {
                hotelList.Remove((from hotel in hotelList where hotel.HotelCode == hotelCode select hotel).FirstOrDefault());
                retVal = true;
            }
            return retVal;
        }

        public static bool UpdateHotel(string hotelCode,float price)
        {
            bool retVal = false;
            if (hotelList != null && hotelList.Count > 0)
            {
                Hotel item = (from hotel in hotelList where hotel.HotelCode == hotelCode select hotel).FirstOrDefault();
                item.HotelPrice = price;
                retVal = true;
            }
            return retVal;
        }

        public static List<Hotel> InsertHotel(Hotel item)
        {            
            if (hotelList != null && hotelList.Count > 0)
            {
                hotelList.Add(item);
                
            }
            return hotelList;
        }
    }

    public class Hotel
    {
        public string HotelName { get; set; }
        public string HotelCode { get; set; }
        public string HotelLocation { get; set; }
        public float HotelPrice { get; set; }

    }
}