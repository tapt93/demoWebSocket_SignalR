using demoSignalR.Models;
using System.Threading.Tasks;

namespace demoSignalR.Hubs.Clients
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}
