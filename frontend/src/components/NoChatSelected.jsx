// import { MessageSquare } from "lucide-react";
// import { useEffect, useState } from "react";

// const NoChatSelected = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/auth/check", {
//           credentials: "include", // needed for cookies/sessions
//         });
        
//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }
        
//         const data = await response.json();
//         setUser(data);
//       } catch (err) {
//         setError(err.message || "An unknown error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//         <div className="alert alert-error max-w-md">
//           <span>Error: {error}</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//       <div className="max-w-md text-center space-y-6">
//         {/* Icon Display */}
//         <div className="flex justify-center gap-4 mb-4">
//           <div className="relative">
//             <div
//               className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
//              justify-center animate-bounce"
//             >
//               <MessageSquare className="w-8 h-8 text-primary " />
//             </div>
//           </div>
//         </div>

//         {/* Welcome Text */}
//         <h2 className="text-2xl font-bold">
//           {user ? `Welcome, ${user.fullName}!` : "Welcome to Chatty!"}
//         </h2>
//         <p className="text-base-content/60">
//           Select a conversation from the sidebar to start chatting
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NoChatSelected;


import { MessageCircle } from "lucide-react"; // Changed to MessageCircle for a different style
import { useEffect, useState } from "react";

const NoChatSelected = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/auth/check", {
          credentials: "include",
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
        <div className="alert alert-error max-w-md">
          <span>Error: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* New Icon Display */}
        <div className="flex justify-center mb-4">
          <div className="relative group">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <MessageCircle 
                className="w-10 h-10 text-primary transition-transform duration-300 group-hover:rotate-12" 
                strokeWidth={2}
              />
              {/* Animated ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">
          {user ? `Welcome, ${user.fullName}!` : "Welcome to Chatty!"}
        </h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;