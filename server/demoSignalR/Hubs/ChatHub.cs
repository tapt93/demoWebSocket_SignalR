using Microsoft.AspNetCore.SignalR;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using demoSignalR.Models;
using demoSignalR.Hubs.Clients;

namespace demoSignalR.ChatHub
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage message)
        {
            await Clients.All.ReceiveMessage(message);
        }
    }
}
