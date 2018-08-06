using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Queue;

namespace WebJobExp
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                //Enabling the TLS 1.2 support as target framework is 4.5.1
                System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                Task task = EntryPointAsync();
                /* Inserting this blocking call to ensure that main process should not exit 
                before completion of the task otherwise it will not work in WebJob scenario 
                as the invkoing process will be finished before task completion notification
                */
                task.Wait();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine("Successfully Called at the finally block after peek");
               //Un Comment this when running in locally to test the inserted message
               //Console.ReadLine();
               
           }
       }

        static async Task EntryPointAsync()
        {
            Console.WriteLine("Async Entry Point Called {0}", DateTime.Now.ToString("hh:mm:sss"));
            // Parse the connection string and return a reference to the storage account.
            CloudStorageAccount storageAccount = Helper.GetStorageAccount();
            StorageQueueHandler workObject = new StorageQueueHandler(storageAccount);
            //
            Task voidTask = workObject.WriteToQueueAsync(string.Format("Hello, World write Message to Queue at {0} on dated {1}", DateTime.Now.ToString("hh:mm:sss"), DateTime.Now.ToString("dd-MMM-yyyy")));
            Console.WriteLine("Async WriteToQueueAsync Called at {0}", DateTime.Now.ToString("hh:mm:sss"));
            Console.WriteLine("The Task status is {0}", voidTask.Status);
            await voidTask;
            //
            //Un Comment this when running in locally to test the inserted message
            Console.WriteLine(workObject.PeekFromQueue());            
            return;
        }
    }
}
