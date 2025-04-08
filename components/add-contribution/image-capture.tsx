'use client';

import { Button, Flex } from '@radix-ui/themes';
import { useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useEffect, useState } from 'react';
import { addContributionOpenAtom, imageCapturedAtom, processStepAtom } from './store';

export const ImageCapture = () => {
  const resetDialog = useResetAtom(addContributionOpenAtom);
  const setProcessStep = useSetAtom(processStepAtom);
  const setImageCaptured = useSetAtom(imageCapturedAtom);
  const [error, setError] = useState('');

  const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    startWebcam();
    return () => {
      webcamStream?.getTracks().forEach((track) => track.stop());
      setWebcamStream(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setWebcamStream(stream);
    } catch (error) {
      setError(`Error accessing webcam. ${error}`);
      console.error('Error accessing webcam:', error);
    }
  };

  const captureImage = () => {
    if (!webcamStream) return;

    const video = document.createElement('video');
    video.srcObject = webcamStream;
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    video.addEventListener('playing', async () => {
      const ratio = 100;

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');

      // Calculating dimensions for upscaling
      const imageWidth = canvas.width;
      const imageHeight = video.videoHeight * (imageWidth / canvas.width);
      const centerX = canvas.width / ratio;
      const centerY = canvas.height / ratio;
      const x = centerX - imageWidth / ratio;
      const y = centerY - imageHeight / ratio;

      setTimeout(() => {
        // context?.drawImage(video, 0, 0, canvas.width, canvas.height);
        context?.drawImage(video, x, y, imageWidth, imageHeight);

        const dataUrl = canvas.toDataURL('image/jpeg');
        setImageCaptured(dataUrl);

        webcamStream?.getTracks().forEach((track) => track.stop());
        setWebcamStream(null);
        setProcessStep('text-extraction');
      }, 100);
    });

    video.play();
  };

  const handleCancel = () => {
    webcamStream?.getTracks().forEach((track) => track.stop());
    setWebcamStream(null);
    resetDialog();
  };

  return (
    <Flex direction="column" gap="2">
      {webcamStream && (
        <video
          autoPlay
          ref={(video: HTMLVideoElement) => {
            if (video) video.srcObject = webcamStream;
          }}
          style={{ borderRadius: 8, transform: 'scaleX(-1)' }}
        />
      )}
      {error}
      <Flex justify="between" gap="3" mt="4">
        <Button
          color="gray"
          onPointerDown={() => handleCancel()}
          size="4"
          style={{ cursor: 'pointer' }}
          variant="soft"
        >
          Cancel
        </Button>
        <Button onClick={captureImage} size="3" style={{ cursor: 'pointer' }}>
          Capture
        </Button>
      </Flex>
    </Flex>
  );
};
