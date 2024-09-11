import React, { useState } from 'react';

const AddForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // 处理表单提交
  const handleSubmit = async (event) => {
    event.preventDefault(); // 防止默认的表单提交行为

    setLoading(true); // 设置加载状态
    setError(null); // 清除之前的错误
    setSuccess(null); // 清除之前的成功信息

    try {
      const response = await fetch('http://localhost:3001/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json(); // 解析服务器响应

      setSuccess('Data submitted successfully!');
      setName(''); // 清空表单字段
      setAddress('');
    } catch (error) {
      setError(error.message); // 设置错误信息
    } finally {
      setLoading(false); // 数据提交完成
    }
  };

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddForm;
