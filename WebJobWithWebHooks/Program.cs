using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;

namespace WebJobWithWebHooks
{
    /*The Webjob with webhooks https://blog.kloud.com.au/2016/04/26/webhook-your-webjob-with-visual-studio-team-services-integration-example/*/
    /* The details of the Webjobs SDK and extensions https://github.com/Azure/azure-webjobs-sdk/wiki*/
    /* The details of the Trigger,Bindings and Route parameters in AzureJobs https://blogs.msdn.microsoft.com/jmstall/2014/01/28/trigger-bindings-and-route-parameters-in-azurejobs/*/
    
    // To learn more about Microsoft Azure WebJobs SDK, please see https://go.microsoft.com/fwlink/?LinkID=320976
    class Program
    {
        // Please set the following connection strings in app.config for this WebJob to run:
        // AzureWebJobsDashboard and AzureWebJobsStorage
        static void Main()
        {
            var config = new JobHostConfiguration();

            if (config.IsDevelopment)
            {
                config.UseDevelopmentSettings();
            }
            
            var host = new JobHost(config);
            // The following code ensures that the WebJob will be running continuously
            host.RunAndBlock();
        }
    }
}
