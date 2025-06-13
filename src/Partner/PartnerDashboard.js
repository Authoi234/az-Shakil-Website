import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaLightbulb, FaMicrochip, FaSpinner, FaUsers } from 'react-icons/fa';

const PartnerDashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [campaignGoal, setCampaignGoal] = useState('');
    const [generatedIdeas, setGeneratedIdeas] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [generationError, setGenerationError] = useState('');

    // Function to handle campaign idea generation using Gemini API
    const generateCampaignIdeas = async () => {
        if (!campaignGoal.trim()) {
            setGenerationError('Please enter a campaign goal.');
            return;
        }

        setIsLoading(true);
        setGeneratedIdeas('');
        setGenerationError('');

        try {
            const prompt = `Generate 3 creative and catchy campaign ideas (name, slogan, brief description) for a partner marketing campaign. The main goal of the campaign is: "${campaignGoal}". Provide the ideas in a clear, readable format, with each idea numbered.`;

            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = ""; // Canvas will provide this at runtime if empty
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setGeneratedIdeas(text);
            } else {
                setGenerationError('Failed to generate ideas. Please try again.');
                console.error('Unexpected API response structure:', result);
            }
        } catch (error) {
            setGenerationError(`An error occurred: ${error.message}`);
            console.error('Error calling Gemini API:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to open the modal
    const openCampaignModal = () => {
        setIsModalOpen(true);
        setGeneratedIdeas(''); // Clear previous ideas when opening
        setGenerationError('');
    };

    // Function to close the modal
    const closeCampaignModal = () => {
        setIsModalOpen(false);
        setCampaignGoal(''); // Clear goal when closing
        setGeneratedIdeas('');
        setGenerationError('');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder Card 1 */}
            <motion.div
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-xl font-bold text-white mb-2">Total Sales</h2>
                <p className="text-3xl font-extrabold text-blue-400">$12,345</p>
                <p className="text-gray-400 text-sm mt-1">Up 15% from last month</p>
            </motion.div>

            {/* Placeholder Card 2 */}
            <motion.div
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-xl font-bold text-white mb-2">New Partners</h2>
                <p className="text-3xl font-extrabold text-purple-400">789</p>
                <p className="text-gray-400 text-sm mt-1">Down 2% from last week</p>
            </motion.div>

            {/* Placeholder Card 3: Active Campaigns with Gemini Feature */}
            <motion.div
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">Active Campaigns</h2>
                    <p className="text-3xl font-extrabold text-green-400">42</p>
                    <p className="text-gray-400 text-sm mt-1">5 completed this month</p>
                </div>
                <motion.button
                    onClick={openCampaignModal}
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <FaLightbulb className="text-xl" /> Generate Campaign Ideas ✨ {/* Replaced Lightbulb icon */}
                </motion.button>
            </motion.div>

            {/* Additional Content Area: Recent Activity */}
            <motion.div
                className="lg:col-span-3 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <h2 className="text-xl font-bold text-white mb-4">Recent Partner Activity</h2>
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                        <FaMicrochip className="text-xl text-blue-300 mr-3" /> {/* Replaced Cpu icon */}
                        <span className="flex-1">New partner application received.</span>
                        <span className="text-gray-500 text-sm">2 min ago</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                        <FaUsers className="text-xl text-green-300 mr-3" /> {/* Replaced Users icon */}
                        <span className="flex-1">Partner 'Innovate Solutions' onboarded.</span>
                        <span className="text-gray-500 text-sm">1 hour ago</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                        <FaLayerGroup className="text-xl text-indigo-300 mr-3" /> {/* Replaced Layers icon */}
                        <span className="flex-1">Campaign 'Summer Boost' launched.</span>
                        <span className="text-gray-500 text-sm">5 hours ago</span>
                    </li>
                </ul>
            </motion.div>

            {/* Campaign Idea Generator Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <motion.div
                        className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-lg w-full border border-gray-700"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="font-bold text-xl text-blue-400 mb-4 text-center">Generate Campaign Ideas ✨</h3>

                        <div className="mb-4">
                            <label htmlFor="campaignGoal" className="block text-sm font-medium text-gray-300 mb-2">
                                Enter Campaign Goal:
                            </label>
                            <textarea
                                id="campaignGoal"
                                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                                rows="3"
                                value={campaignGoal}
                                onChange={(e) => setCampaignGoal(e.target.value)}
                                placeholder="e.g., Increase Q3 partner sign-ups by 20% or Promote new product X to existing partners."
                            ></textarea>
                            {generationError && <p className="text-red-500 text-sm mt-2">{generationError}</p>}
                        </div>

                        <div className="flex justify-center gap-4 mb-4">
                            <motion.button
                                onClick={generateCampaignIdeas}
                                className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="text-xl animate-spin" /> Generating... {/* Replaced Loader2 icon */}
                                    </>
                                ) : (
                                    <>
                                        <FaLightbulb className="text-xl" /> Get Ideas
                                    </>
                                )}
                            </motion.button>
                            <motion.button
                                onClick={closeCampaignModal}
                                className="px-6 py-2 bg-gray-600 text-white rounded-md font-semibold hover:bg-gray-700 transition duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isLoading}
                            >
                                Cancel
                            </motion.button>
                        </div>

                        {generatedIdeas && (
                            <motion.div
                                className="mt-6 p-4 bg-gray-700 rounded-md border border-gray-600 max-h-60 overflow-y-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h4 className="font-semibold text-lg text-green-400 mb-2">Generated Ideas:</h4>
                                <pre className="whitespace-pre-wrap text-gray-200 text-sm leading-relaxed">
                                    {generatedIdeas}
                                </pre>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default PartnerDashboard;