using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebSocketManager;

namespace RealTimeChat
{
    public class ChatHandler : WebSocketHandler
    {
        public ChatHandler(WebSocketConnectionManager webSocketConnectionManager) : base(webSocketConnectionManager)
        {

        }
    }
}
