using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Queue;

namespace WebJobExp
{
    class StorageQueueHandler
    {
        private CloudStorageAccount storageAccount;
        private CloudQueueClient queueClient;
        private CloudQueue queue;

        public StorageQueueHandler(CloudStorageAccount storageAccount)
        {
            this.storageAccount = storageAccount;
            queueClient = storageAccount.CreateCloudQueueClient();
            queue = queueClient.GetQueueReference("nileshstoragequeue");
        }

        public void WriteToQueue(string inputMessage)
        {
            CloudQueueMessage message = new CloudQueueMessage(inputMessage);
            queue.AddMessage(message);             
        }

        /* https://stackoverflow.com/questions/8043296/whats-the-difference-between-returning-void-and-returning-a-task */
        /* For async performance please visit https://stackify.com/csharp-async-await-task-performance/*/
        /*If you use a Task return type for an async method, a calling method can use an 
        * await operator to suspend the caller's completion until the called async method has finished.*/

        /*Webjob with Webhooks is good example @ https://blog.kloud.com.au/2016/04/26/webhook-your-webjob-with-visual-studio-team-services-integration-example/*/

        /*The Azure Webjob publishing explained from VS @ https://developingdane.com/scheduled-azure-web-jobs/*/
        public async Task WriteToQueueAsync(string inputMessage)
        {
            CloudQueueMessage message = new CloudQueueMessage(inputMessage);
            await queue.AddMessageAsync(message);
        }

        public string PeekFromQueue()
        {
            return queue.PeekMessage().AsString;
        }
    }
}
