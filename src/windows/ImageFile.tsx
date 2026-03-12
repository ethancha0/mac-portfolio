import WindowWrapper from '../hoc/WindowWrapper'
import WindowControls from '../components/WindowControls'
import useWindowStore from '../store/window'

const ImageFile = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile.data as { name: string; imageUrl: string } | null

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2 className="pl-2">{data?.name ?? 'Image'}</h2>
      </div>

      <div className="flex items-center justify-center h-full bg-black">
        {data?.imageUrl && (
          <img
            src={data.imageUrl}
            alt={data.name}
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>
    </>
  )
}

const ImageFileWindow = WindowWrapper(ImageFile, 'imgfile')
export default ImageFileWindow
