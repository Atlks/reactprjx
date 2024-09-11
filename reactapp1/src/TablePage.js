import React, { useState, useEffect } from 'react';

const TablePage = () => {

    const [data, setData] = useState([]); // 用于存储从JSON获取的数据
    const [loading, setLoading] = useState(false); // 用于指示数据加载状态
    const [error, setError] = useState(null); // 用于存储错误信息

    // 定义数据加载函数
    const fetchData = async () => {
        setLoading(true); // 设置加载状态
        setError(null); // 清除之前的错误
        try {
            const response = await fetch('/list422.json'); // 请求JSON文件
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json(); // 解析JSON数据
            setData(result); // 将数据存储到状态中
        } catch (error) {
            setError(error); // 设置错误信息
        } finally {
            setLoading(false); // 数据加载完成
        }
    };

    // 使用 useEffect 钩子在组件加载时调用 fetchData
    useEffect(() => {
        fetchData(); // 组件加载时自动执行 fetchData 方法
    }, []); // 空依赖数组表示只在组件挂载时调用一次

    return (
        <div>
            <h1>Table Page</h1>
            <button onClick={fetchData}>Load Data</button> {/* 点击按钮时调用 fetchData */}
            {loading && <p>Loading...</p>} {/* 显示加载状态 */}
            {error && <p>Error: {error.message}</p>} {/* 显示错误信息 */}
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;
